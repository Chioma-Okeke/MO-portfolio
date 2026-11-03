// High-level architecture of the Laundry Inventory Management System,
// reconstructed from the app's screens and the project summary.
// Drawn on a 960 x 600 (16:10) canvas to fit the case study's diagram frame.

const serif = "var(--font-cormorant), Georgia, serif"
const sans = "var(--font-manrope), system-ui, sans-serif"
const line = "rgba(31, 29, 29, 0.45)"

type BoxProps = {
  x: number
  y: number
  w: number
  h: number
  title: string
  lines?: string[]
  accent?: boolean
}

function Box({ x, y, w, h, title, lines = [], accent }: BoxProps) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        fill={accent ? "var(--blush-soft)" : "var(--surface)"}
        stroke={accent ? "var(--wine)" : line}
        strokeWidth={accent ? 1.4 : 1}
      />
      <text x={x + 16} y={y + 28} fontFamily={serif} fontSize={19} fill="var(--ink)">
        {title}
      </text>
      {lines.map((l, i) => (
        <text key={l} x={x + 16} y={y + 52 + i * 20} fontFamily={sans} fontSize={13} fill="#6e6662">
          {l}
        </text>
      ))}
    </g>
  )
}

function Person({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <g>
      <circle cx={x + 60} cy={y + 18} r={11} fill="none" stroke="var(--ink)" strokeWidth={1.2} />
      <path d={`M${x + 40} ${y + 52} a20 16 0 0 1 40 0`} fill="none" stroke="var(--ink)" strokeWidth={1.2} />
      <text x={x + 60} y={y + 76} textAnchor="middle" fontFamily={serif} fontSize={19} fill="var(--ink)">
        {label}
      </text>
    </g>
  )
}

function Label({ x, y, children, anchor = "start" }: { x: number; y: number; children: string; anchor?: "start" | "middle" | "end" }) {
  return (
    <text x={x} y={y} textAnchor={anchor} fontFamily={sans} fontSize={11} fill="var(--wine)" fontStyle="italic">
      {children}
    </text>
  )
}

function Heading({ x, children }: { x: number; children: string }) {
  return (
    <text x={x} y={84} fontFamily={sans} fontSize={10.5} letterSpacing={1.8} fill="#6e6662">
      {children}
    </text>
  )
}

export function LaundryArchitecture({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 960 600"
      className={className}
      role="img"
      aria-labelledby="laundry-arch-title laundry-arch-desc"
    >
      <title id="laundry-arch-title">Laundry Inventory Management System architecture</title>
      <desc id="laundry-arch-desc">
        Admins and staff sign in through an internal portal in a Next.js and TypeScript app. Admins choose between
        the admin and staff portals; staff go to the staff portal. Requests from both portals pass through middleware that verifies
        the JWT and checks the user&apos;s role, then reach REST API routes that read and write MongoDB through
        Mongoose. A receipt and tag generator turns each order into printable receipts and item tags for staff.
      </desc>
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" fill={line} />
        </marker>
        <marker id="arrow-wine" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" fill="var(--wine)" />
        </marker>
      </defs>

      {/* Column headings */}
      <Heading x={24}>PEOPLE</Heading>
      <Heading x={184}>NEXT.JS APP · TYPESCRIPT</Heading>
      <Heading x={464}>SERVER · NEXT.JS</Heading>
      <Heading x={764}>DATA</Heading>

      {/* People */}
      <Person x={24} y={110} label="Admin" />
      <Person x={24} y={226} label="Staff" />

      {/* App screens */}
      <Box x={184} y={106} w={240} h={70} title="Internal Portal" lines={["Email + password login"]} />
      <Box
        x={184}
        y={200}
        w={240}
        h={86}
        title="Choose your portal"
        lines={["Admins: Admin or Staff", "Staff: straight to Staff portal"]}
      />
      <Box
        x={184}
        y={310}
        w={240}
        h={116}
        title="Admin portal"
        lines={["Dashboard: customers, revenue", "Orders, outstanding, receipts", "Customers, inventory, users"]}
      />
      <Box
        x={184}
        y={452}
        w={240}
        h={96}
        title="Staff portal"
        lines={["Take new orders", "Print receipts and item tags"]}
      />

      {/* Server */}
      <Box
        x={464}
        y={106}
        w={250}
        h={116}
        accent
        title="Middleware"
        lines={["Verify JWT on every request", "Check role (RBAC)", "Admin routes: admins only"]}
      />
      <Box
        x={464}
        y={262}
        w={250}
        h={136}
        title="REST API routes"
        lines={["Auth and users", "Customers", "Orders and items", "Inquiries"]}
      />
      <Box
        x={464}
        y={438}
        w={250}
        h={106}
        title="Receipt + tag generator"
        lines={["Built from each order", "Sends printable receipts and", "item tags to the staff portal"]}
      />

      {/* MongoDB cylinder */}
      <g>
        <path
          d="M764 178 v276 a86 20 0 0 0 172 0 v-276"
          fill="var(--surface)"
          stroke={line}
        />
        <ellipse cx={850} cy={178} rx={86} ry={20} fill="var(--surface)" stroke={line} />
        <text x={850} y={236} textAnchor="middle" fontFamily={serif} fontSize={22} fill="var(--ink)">
          MongoDB
        </text>
        <text x={850} y={258} textAnchor="middle" fontFamily={sans} fontSize={13} fill="#6e6662">
          via Mongoose
        </text>
        {["Users", "Customers", "Orders", "Items"].map((c, i) => (
          <g key={c}>
            <rect x={790} y={286 + i * 40} width={120} height={28} fill="var(--background)" stroke={line} strokeWidth={0.8} />
            <text x={850} y={305 + i * 40} textAnchor="middle" fontFamily={sans} fontSize={13} fill="var(--ink)">
              {c}
            </text>
          </g>
        ))}
      </g>

      {/* People → login */}
      <path d="M144 140 H184" stroke={line} markerEnd="url(#arrow)" fill="none" />
      <path d="M144 256 C166 256 166 160 184 160" stroke={line} markerEnd="url(#arrow)" fill="none" />

      {/* Login → portal choice → portals */}
      <path d="M304 176 V200" stroke={line} markerEnd="url(#arrow)" fill="none" />
      <path d="M304 286 V310" stroke={line} markerEnd="url(#arrow)" fill="none" />
      <Label x={312} y={302}>admin</Label>
      <path d="M196 286 C160 310 160 430 196 452" stroke={line} markerEnd="url(#arrow)" fill="none" />
      <Label x={172} y={374} anchor="end">staff</Label>

      {/* Both portals → middleware (staff requests join the same path) */}
      <path d="M424 368 C446 368 444 190 464 190" stroke="var(--wine)" markerEnd="url(#arrow-wine)" fill="none" />
      {/* (438.5, 329) sits on the curve above, so the two paths visibly merge */}
      <path d="M424 478 H438.5 V329" stroke="var(--wine)" fill="none" />
      <circle cx={438.5} cy={329} r={2.5} fill="var(--wine)" />
      <g transform="translate(456 300) rotate(-90)">
        <Label x={0} y={0} anchor="middle">requests + JWT</Label>
      </g>

      {/* Middleware → API, denied → back to login */}
      <path d="M589 222 V262" stroke={line} markerEnd="url(#arrow)" fill="none" />
      <Label x={597} y={246}>allowed</Label>
      <path
        d="M714 136 C744 136 744 66 690 66 H420 C400 66 400 86 400 106"
        stroke="var(--wine)"
        strokeDasharray="4 4"
        markerEnd="url(#arrow-wine)"
        fill="none"
      />
      <Label x={556} y={58} anchor="middle">no token: redirect to login · wrong role: 403</Label>

      {/* API ↔ MongoDB */}
      <path d="M714 330 H764" stroke={line} markerStart="url(#arrow)" markerEnd="url(#arrow)" fill="none" />

      {/* API → generator → staff */}
      <path d="M589 398 V438" stroke={line} markerEnd="url(#arrow)" fill="none" />
      <path d="M464 500 H424" stroke="var(--wine)" markerEnd="url(#arrow-wine)" fill="none" />

      <text x={936} y={590} textAnchor="end" fontFamily={sans} fontSize={10.5} fontStyle="italic" fill="#9b938c">
        High-level view, reconstructed from the app&apos;s screens
      </text>
    </svg>
  )
}
