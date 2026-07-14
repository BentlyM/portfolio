import NextLink from "next/link";

interface TickerRow {
  symbol: string;
  name: string;
  status: "LIVE" | "PRIVATE" | "OSS";
  href: string;
  external?: boolean;
}

const ROWS: TickerRow[] = [
  { symbol: "ALGO", name: "trading engine", status: "PRIVATE", href: "/projects" },
  {
    symbol: "GRID",
    name: "news streaming",
    status: "LIVE",
    href: "https://www.gridnews.io/",
    external: true,
  },
  {
    symbol: "SHIP",
    name: "battleship",
    status: "LIVE",
    href: "https://battleship-woad.vercel.app",
    external: true,
  },
  {
    symbol: "LIBR",
    name: "library manager",
    status: "LIVE",
    href: "https://library-management-app-tau.vercel.app/",
    external: true,
  },
];

const STATUS_STYLES: Record<TickerRow["status"], string> = {
  LIVE: "text-primary",
  OSS: "text-default-600",
  PRIVATE: "text-default-400",
};

/* One session's worth of made-up price action; pathLength=1 lets the CSS
   draw animation work regardless of the path's real length. */
const SPARK =
  "M0 44 L26 40 40 46 58 34 74 38 92 26 110 32 128 18 146 24 164 14 184 22 204 10 224 16 244 6";

export const QuoteBoard = () => (
  <div className="w-full max-w-md rounded-lg border border-default-200 bg-background/80 font-mono text-sm shadow-sm">
    <div className="flex items-center justify-between border-b border-default-200 px-4 py-2 text-xs text-default-500">
      <span>PROJECTS · SESSION 2026</span>
      <span className="inline-flex items-center gap-1.5 text-primary">
        <span className="status-dot inline-block h-1.5 w-1.5 rounded-full bg-primary" />
        OPEN
      </span>
    </div>

    <div className="border-b border-default-200 px-4 py-3" aria-hidden>
      <svg viewBox="0 0 244 52" fill="none" className="h-12 w-full text-primary">
        <path
          className="spark-path"
          d={SPARK}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={1}
        />
      </svg>
    </div>

    <ul className="divide-y divide-default-200">
      {ROWS.map((row) => (
        <li key={row.symbol}>
          <NextLink
            href={row.href}
            target={row.external ? "_blank" : undefined}
            rel={row.external ? "noreferrer noopener" : undefined}
            className="flex items-baseline justify-between gap-3 px-4 py-2.5 transition-colors hover:bg-default-100"
          >
            <span className="font-semibold tracking-wide">{row.symbol}</span>
            <span className="flex-1 truncate text-default-500">{row.name}</span>
            <span className={`text-xs ${STATUS_STYLES[row.status]}`}>
              {row.status}
            </span>
          </NextLink>
        </li>
      ))}
    </ul>

    <div className="px-4 py-2 text-xs text-default-400">
      <NextLink href="/projects" className="hover:text-primary transition-colors">
        full listings →
      </NextLink>
    </div>
  </div>
);
