import Card from "@/components/Card";
import { EventItem } from "@/app/lib/site";

type EventCardProps = {
  event: EventItem;
};

export default function EventCard({ event }: EventCardProps) {
  return (
    <Card>
      <span className="inline-block rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
        {event.category}
      </span>
      <h3 className="mt-3 text-2xl font-bold text-slate-900">{event.title}</h3>
      <p className="mt-2 text-base text-slate-500">
        {event.dateRange} ・ {event.location}
      </p>
      {event.note ? <p className="mt-4 text-base leading-8 text-slate-600">{event.note}</p> : null}
    </Card>
  );
}
