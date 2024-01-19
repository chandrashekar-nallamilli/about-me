import React from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import Markdown from "markdown-to-jsx";

const Job = ({
  data: {
    name,
    position,
    url,
    startDate,
    endDate,
    summary,
    highlights,
    client,
  },
}) => (
  <article className="jobs-container">
    <header>
      <h4>
        <a href={url}>{name}</a> - {position}
      </h4>
      {client && <h5>{client}</h5>}
      <p className="daterange">
        {" "}
        {dayjs(startDate).format("MMMM YYYY")} -{" "}
        {endDate ? dayjs(endDate).format("MMMM YYYY") : "PRESENT"}
      </p>
    </header>
    {summary ? (
      <div>
        <h5>summary</h5>
        <Markdown
          options={{
            overrides: {
              p: {
                props: {
                  className: "summary",
                },
              },
            },
          }}
        >
          {summary}
        </Markdown>
      </div>
    ) : null}
    {highlights ? (
      <div>
        <h5>highlights</h5>
        <ul className="points">
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>
    ) : null}
  </article>
);

Job.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string,
    summary: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string.isRequired),
    client: PropTypes.string,
  }).isRequired,
};

export default Job;
