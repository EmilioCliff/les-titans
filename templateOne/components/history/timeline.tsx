import type { TimelineEvent } from "@/lib/data"

interface TimelineProps {
  events: TimelineEvent[]
}

export function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

      <div className="space-y-12">
        {events.map((event, index) => (
          <div
            key={event.year}
            className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
          >
            {/* Year Marker */}
            <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center -translate-x-1/2 z-10">
              <div className="w-3 h-3 bg-primary-foreground rounded-full" />
            </div>

            {/* Content */}
            <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
              <div
                className={`bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}
              >
                <div className={`inline-flex items-center gap-2 mb-3 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  <span className="font-display text-3xl font-bold text-primary">{event.year}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{event.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{event.description}</p>
              </div>
            </div>

            {/* Spacer for alternating layout */}
            <div className="hidden md:block flex-1" />
          </div>
        ))}
      </div>
    </div>
  )
}
