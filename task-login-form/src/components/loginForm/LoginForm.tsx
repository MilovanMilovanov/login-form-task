import { useForm, type SubmitHandler } from "react-hook-form";
import { Label, Input, Button, ErrorMessage } from "../../ui";
import styles from "./loginForm.module.scss";
interface LoginFormProps {
  action?: () => void;
}

interface LoginFormInputProps {
  username: string;
  password: string;
}

export default function LoginForm({ action }: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<LoginFormInputProps>({ mode: "onChange" });

  const onSubmit: SubmitHandler<LoginFormInputProps> = () => {
    action?.();
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.formTitle}>Login</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formField}>
          <Label htmlFor="username-field" className={styles.label}>
            Username
          </Label>
          <div className={styles.inputWrapper}>
            <Input
              id="username-field"
              type="text"
              className={styles.input}
              aria-describedby={errors.username ? "username-error" : undefined}
              placeholder="Username"
              {...register("username", {
                required: "Username is required.",
                minLength: { value: 6, message: "At least 6 symbols required" },
              })}
            />
            <ErrorMessage id="username-error" className={styles.errorMessage}>
              {errors.username && errors.username.message}
            </ErrorMessage>
          </div>
        </div>

        <div className={styles.formField}>
          <Label htmlFor="password-field" className={styles.label}>
            Password
          </Label>
          <div className={styles.inputWrapper}>
            <Input
              id="password-field"
              className={styles.input}
              type="password"
              aria-describedby={errors.password ? "password-error" : undefined}
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "The length must be at least 6 symbols",
                },
              })}
            />
            <ErrorMessage id="password-error" className={styles.errorMessage}>
              {errors.password && errors.password.message}
            </ErrorMessage>
          </div>
        </div>

        <Button
          type="submit"
          isDisabled={isSubmitting || !isValid}
          className={`${styles.button} ${!isValid || isSubmitting ? styles.disabled : ""}`}
        >
          {isSubmitting ? "Влизане..." : "Вход"}
        </Button>
      </form>
    </div>
  );
}
