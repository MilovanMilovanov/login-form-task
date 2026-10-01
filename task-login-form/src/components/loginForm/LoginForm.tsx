import { useForm, type SubmitHandler } from "react-hook-form";
import { Label, Input, Button } from "../../ui";

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
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputProps>();

  const onSubmit: SubmitHandler<LoginFormInputProps> = () => {
    action?.();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Вход</h2>

      <div>
        <Label htmlFor="username-field">Username</Label>
        <Input
          id="username-field"
          type="text"
          placeholder="Username"
          {...register("username", {
            required: "Username is required.",
            minLength: { value: 6, message: "At least 6 symbols required" },
          })}
        />
        {errors.username && <span>{errors.username.message}</span>}
      </div>

      <div>
        <Label htmlFor="password-field">Password</Label>
        <Input
          id="password-field"
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "The length must be at least 6 symbols",
            },
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Влизане..." : "Вход"}
      </Button>
    </form>
  );
}
