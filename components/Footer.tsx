export default function Footer() {
  return (
    <footer className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <p className="text-sm align-middle text-center text-muted-foreground py-4">
        © {new Date().getFullYear()} Notechain. All rights reserved.
      </p>
    </footer>
  );
}
