import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
  BarChart, Bar, PieChart, Pie, Cell,
} from 'recharts'

const GRID = '#22222B'
const ACCENT = '#3FB950'
const ACCENT2 = '#2F81F7'
const TEXT_MUTED = '#9CA3AF'

const tooltipStyle = {
  background: '#13131A',
  border: '1px solid #22222B',
  borderRadius: 12,
  fontSize: 12,
  color: '#fff',
}

export function NavLineChart({ data }: { data: { date: string; nav: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <LineChart data={data} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
        <CartesianGrid stroke={GRID} vertical={false} />
        <XAxis dataKey="date" stroke={TEXT_MUTED} fontSize={11} tickLine={false} axisLine={false} />
        <YAxis stroke={TEXT_MUTED} fontSize={11} tickLine={false} axisLine={false} />
        <Tooltip contentStyle={tooltipStyle} />
        <Line type="monotone" dataKey="nav" stroke={ACCENT} strokeWidth={2.5} dot={false} activeDot={{ r: 4 }} />
      </LineChart>
    </ResponsiveContainer>
  )
}

export function AumBarChart({ data }: { data: { year: string; aum: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={data} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
        <CartesianGrid stroke={GRID} vertical={false} />
        <XAxis dataKey="year" stroke={TEXT_MUTED} fontSize={11} tickLine={false} axisLine={false} />
        <YAxis stroke={TEXT_MUTED} fontSize={11} tickLine={false} axisLine={false} />
        <Tooltip contentStyle={tooltipStyle} />
        <Bar dataKey="aum" fill={ACCENT2} radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

const PIE_COLORS = ['#3FB950', '#2F81F7', '#F2C744', '#E0607E', '#9D7BEA', '#4AC4C0', '#6B7280']

export function SectorPieChart({ data }: { data: { sector: string; weight: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <PieChart>
        <Pie data={data} dataKey="weight" nameKey="sector" cx="50%" cy="50%" innerRadius={55} outerRadius={85} paddingAngle={2}>
          {data.map((_, i) => (
            <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} stroke="none" />
          ))}
        </Pie>
        <Tooltip contentStyle={tooltipStyle} />
      </PieChart>
    </ResponsiveContainer>
  )
}
