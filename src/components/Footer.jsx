export function Footer() {
  return (
    <footer className="border-t border-line bg-surface/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>Simple React boilerplate for reusable app generation.</p>
        <p>
          Add routes in <code>src/pages</code> and shared logic in{' '}
          <code>src/services</code>.
        </p>
      </div>
    </footer>
  );
}
