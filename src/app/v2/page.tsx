import { redirect } from "next/navigation";

// La v2 ahora es la home. Mantenemos /v2 como alias por compatibilidad.
export default function V2Redirect() {
  redirect("/");
}
