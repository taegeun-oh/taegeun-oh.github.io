"use client";

import { useMemo, useState } from "react";
import { publicationTypeLabels, publications, type PublicationType } from "@/data/publications";

type Filter = "all" | PublicationType;
const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "All work" },
  { value: "journal", label: "International journals" },
  { value: "conference", label: "Conferences" },
  { value: "domestic", label: "Domestic journals" },
  { value: "book", label: "Books" },
];

export function PublicationExplorer() {
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");
  const visible = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return publications.filter((item) => {
      const matchesType = filter === "all" || item.type === filter;
      const haystack = `${item.title} ${item.authors} ${item.venue} ${item.year} ${item.indexes?.join(" ") ?? ""}`.toLowerCase();
      return matchesType && (!normalized || haystack.includes(normalized));
    });
  }, [filter, query]);

  return (
    <div className="publication-explorer">
      <div className="publication-tools">
        <div className="filter-row" role="group" aria-label="Filter publications">
          {filters.map((item) => (
            <button key={item.value} className={filter === item.value ? "active" : ""} type="button" onClick={() => setFilter(item.value)}>{item.label}</button>
          ))}
        </div>
        <label className="search-field"><span className="sr-only">Search publications</span>
          <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search title, author, venue, or year" />
          <span aria-hidden="true">⌕</span>
        </label>
      </div>
      <p className="result-count" aria-live="polite">{visible.length} results</p>
      <div className="publication-list">
        {visible.map((item) => {
          const href = item.status === "Published" ? item.url : undefined;
          const showPublicationDetails = item.status === "Published";
          return (
            <article className={`publication-item${href ? "" : " publication-item-no-link"}`} key={item.id}>
              <div className="publication-year">{item.year}</div>
              <div className="publication-copy">
                <div className="publication-meta"><span>{publicationTypeLabels[item.type]}</span><span className={`status status-${item.status.toLowerCase().replace(" ", "-")}`}>{item.status}</span>{showPublicationDetails && item.indexes?.map((index) => <span className={`index-badge index-${index.toLowerCase()}`} key={index}>{index}</span>)}</div>
                <h2>{item.title}</h2><p className="authors">{item.authors}</p>{showPublicationDetails && <p className="venue">{item.venue}{item.details ? ` · ${item.details}` : ""}</p>}
              </div>
              {href && <a className="publication-link" href={href} target="_blank" rel="noreferrer" aria-label={`Open the official publication page for ${item.title}`}>↗</a>}
            </article>
          );
        })}
      </div>
      {visible.length === 0 && <div className="empty-state"><strong>No matching publications.</strong><span>Try another keyword or category.</span></div>}
    </div>
  );
}
