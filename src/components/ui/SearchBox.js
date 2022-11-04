import React from 'react';

export default function SearchBox(props) {
    const {query, setSearchQuery} = props;

    return (
        <input
            data-cy="input-search"
            type="text" autoFocus
            className="form-control search"
            value={query}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search"
        />
    );
}
