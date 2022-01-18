import React, { useEffect, useState } from 'react';
import data from '../../data/data.js';
import '../../styles/profile.css';
import Card from './Card.js';
import SearchBar from '../SearchBar'

export default function Profile() {
    const [profiles, setProfiles] = useState([]);
    const [search, setSearch] = useState("");

    const handleDelete = (login) => {
        const newProfileList = profiles.filter((profile) => {
            return profile.login.username !== login
        });

        setProfiles(newProfileList);
    };

    const handleSearch = (profile) => {
        return profile.name.first.toLowerCase().startsWith(search.toLowerCase())

    }

    useEffect(() => {
        const getProfiles = async () => {
            const response = await data();
            setProfiles(response.data.results);
        }
        getProfiles()
    }, []);

    return (
        <section className="profile-section">
            <div className="container --flex-center --dir-column">
                <h2>User Profiles</h2>
                <SearchBar key={2} searchTerm={async (e) => {
                    setSearch(e.target.value);
                    console.log(search)
                }} />
                {profiles.filter((profile) => {
                    if (search == "") {
                        return profile;
                    } else if (handleSearch(profile)) {
                        return profile;
                    }
                }).map((profile, i) => {
                    return <Card key={i} first={profile.name.first} last={profile.name.last} image={profile.picture.medium} email={profile.email} removeProfile={() => {
                        handleDelete(profile.login.username)
                    }} />
                })}

            </div>
        </section>
    )
}
