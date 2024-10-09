import Link from "next/link";

const links = [
  "useactionstate",
  "/usecallback/",
  "/usecontext/",
  "/usedebugvalue/",
  "/usedeferredvalue/",
  "/useeffect/",
  "/useid/",
  "/useimperativehandle/",
  "/useinsertioneffect/",
  "/uselayouteffect/",
  "/usememo/",
  "useoptimistic/",
  "/usereducer/",
  "/useref/",
  "/usestate/",
  "/usesyncexternalstore/",
  "/usetransition/",
  "/memo/",
];

export const HookLinks = () => {
  return (
    <div className="links">
      {links.map((link) => (
        <Link
          key={link}
          href={link}
          style={{
            display: "block",
            textDecoration: "underline",
          }}
        >
          {link}
        </Link>
      ))}
    </div>
  );
};
