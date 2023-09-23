import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Therapist() {
    const [therapists, setTherapists] = useState([]);
    const [searchDomain, setSearchDomain] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/therapists')
            .then(response => {
                setTherapists(response.data);
            })
            .catch(error => console.error('Error fetching therapists:', error));
    }, []);

    const handleSearchChange = (event) => {
        setSearchDomain(event.target.value);
    };

    const filteredTherapists = therapists.filter(therapist => {
        return therapist.domain.toLowerCase().includes(searchDomain.toLowerCase());
    });

    return (
        <div>
            <h2>Therapist List</h2>
            <input
                type="text"
                placeholder="Search by domain"
                value={searchDomain}
                onChange={handleSearchChange}
            />
            <ul>
                {filteredTherapists.map(therapist => (
                    <li key={therapist._id}>
                        <strong>Name:</strong> {therapist.Therapist}<br />
                        <strong>Location:</strong> {therapist.Location}<br />
                        <strong>Contact:</strong> {therapist.contact}<br />
                        <strong>Domain:</strong> {therapist.domain}<br />
                        <hr />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Therapist;
