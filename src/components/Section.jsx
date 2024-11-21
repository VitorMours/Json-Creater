export default function Section({ component }) {
  return (
    <section className="p-4 shadow-2xl landscape:w-2/5 rounded-xl landscape:h-3/5">
      {component}
    </section>
  );
}