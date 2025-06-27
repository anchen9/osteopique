import type React from "react"

export const Chart = ({ children }: { children: React.ReactNode }) => {
  return <div className="chart">{children}</div>
}

export const ChartContainer = ({
  children,
  height,
  className,
}: { children: React.ReactNode; height?: number; className?: string }) => {
  return (
    <div style={{ height: height }} className={`chart-container ${className}`}>
      {children}
    </div>
  )
}

export const ChartTooltip = ({ children }: { children: React.ReactNode }) => {
  return <div className="chart-tooltip">{children}</div>
}

export const ChartTooltipContent = () => {
  return <div className="chart-tooltip-content"></div>
}

export const Line = () => {
  return <div className="line"></div>
}

export const LineChart = ({ data, children }: { data: any[]; children: React.ReactNode }) => {
  return <div className="line-chart">{children}</div>
}

export const XAxis = ({ dataKey }: { dataKey: string }) => {
  return <div className="x-axis" data-key={dataKey}></div>
}

export const YAxis = ({
  tickFormatter,
  domain,
  tickCount,
}: { tickFormatter?: (value: any) => string; domain?: number[]; tickCount?: number }) => {
  return <div className="y-axis"></div>
}

export const Bar = () => {
  return <div className="bar"></div>
}

export const BarChart = ({ data, children }: { data: any[]; children: React.ReactNode }) => {
  return <div className="bar-chart">{children}</div>
}

