import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Mainlay from "~/components/main_layout/main_layout";

export default component$(() => {
  return (
    <>
      <Mainlay />
    </>
  );
});

export const head: DocumentHead = {
  title: "Fibraa",
  meta: [
    {
      name: "slogan",
      content: "solving sail",
    },
  ],
};