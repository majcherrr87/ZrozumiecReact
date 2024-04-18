import { useForm } from "react-hook-form";

import "./Form.css";

export function Form({ onAddPerson }) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setError,
    formState: { errors, isDirty, isSubmitSuccessful },
  } = useForm({
    mode: "onBlur",
  });

  const isInvoiceRequired = watch("isInvoiceRequired");

  console.log(errors);

  function onSubmit(data) {
    const { isInvoiceRequired, ...formData } = data;

    if (!isInvoiceRequired) {
      delete formData.nip;
    }

    console.log(formData);

    try {
      onAddPerson(formData);
    } catch (e) {
      setError("general", { message: "Błąd dodawania osoby", type: "custom" });
    }
  }

  if (isSubmitSuccessful) {
    return (
      <>
        <span className="title">Osoba dodana!</span>
        <button onClick={() => reset()}>Dodaj kolejną osobę</button>
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
      <label htmlFor="name">Imię</label>
      <input
        id="name"
        {...register("name", {
          required: "Podaj Imię",
        })}
      />
      {errors.name && <span className="error">{errors.name.message}</span>}

      <label htmlFor="age">Wiek</label>
      <input
        id="age"
        type="number"
        {...register("age", {
          valueAsNumber: true,
          required: "Podaj wiek",
          min: { value: 1, message: "Podaj wiek większy od 0" },
          max: { value: 99, message: "Podaj wiek mniejszy od 100" },
        })}
      />
      {errors.age && <span className="error">{errors.age.message}</span>}

      <label htmlFor="tel">Telefon</label>
      <input
        id="tel"
        type="tel"
        {...register("contact.tel", {
          required: "Podaj numer telefonu",
          pattern: {
            value: /^[+][0-9]{9,15}$/,
            message: "Podaj poprawny numer telefonu",
          },
        })}
      />
      {errors.contact?.tel && (
        <span className="error">{errors.contact.tel.message}</span>
      )}

      <label htmlFor="email">E-mail</label>
      <input
        id="email"
        type="email"
        {...register("contact.email", {
          required: "Podaj adress e-mail",
          validate: (email) =>
            email.includes("@") || "Podaj poprawny adress e-mail",
        })}
      />
      {errors.contact?.email && (
        <span className="error">{errors.contact.email.message}</span>
      )}

      <label htmlFor="isInvoiceRequired">
        <input
          id="isInvoiceRequired"
          type="checkbox"
          {...register("isInvoiceRequired")}
        />
        Faktura VAT
      </label>
      <input
        id="nip"
        placeholder="Podaj NIP"
        type="number"
        {...register("nip", {
          required: {
            value: isInvoiceRequired,
            message: "Podaj NIP",
          },
          pattern: { value: /^[0-9]{10}$/, message: "Podaj poprawny NIP" },
          disabled: !isInvoiceRequired,
        })}
      />
      {errors.nip && <span className="error">{errors.nip.message}</span>}

      <div className="footer">
        {errors.general && (
          <span className="error">{errors.general.message}</span>
        )}
        <button disabled={!isDirty}>Dodaj</button>
      </div>
    </form>
  );
}
