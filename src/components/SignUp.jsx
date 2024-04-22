import React, { useState, useRef, useEffect } from 'react';
import { Country, State, City } from 'country-state-city'; // Import City from country-state-city
import { useUser } from '@supabase/auth-helpers-react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { Link } from 'react-router-dom';

// Import useNavigate
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [formData, setFormData] = useState({
        profilePhoto: '',
        email: '',
        fullName: '',
        nationality: '',
        location: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
    });
    const [previewPhoto, setPreviewPhoto] = useState(null);
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const fileInputRef = useRef(null);
    const supabase = useSupabaseClient();
    const navigate = useNavigate(); // Replace useHistory with useNavigate

    const defaultProfilePhoto = 'src/assets/profile-add-svgrepo-com.svg';

    useEffect(() => {
        // Fetch list of countries once when the component mounts
        const fetchCountries = async () => {
            const countriesData = Country.getAllCountries();
            setCountries(countriesData);
        };
        fetchCountries();
    }, []);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'profilePhoto' && files.length > 0) {
            setPreviewPhoto(URL.createObjectURL(files[0]));
        }
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleDefaultPhotoClick = () => {
        fileInputRef.current.click();
    };

    const handleAddPhotoButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleCountryChange = (e) => {
        const selectedCountry = e.target.value;
        setFormData({
            ...formData,
            nationality: selectedCountry
        });
        const selectedCountryData = countries.find(country => country.name === selectedCountry);
        if (selectedCountryData) {
            const countryStates = State.getStatesOfCountry(selectedCountryData.isoCode);
            setStates(countryStates);
        } else {
            setStates([]);
        }
    };

    const handleStateChange = (e) => {
        const selectedState = e.target.value;
        setFormData({
            ...formData,
            location: selectedState
        });
        const selectedStateData = states.find(state => state.name === selectedState);
        if (selectedStateData) {
            const stateCities = City.getCitiesOfState(selectedStateData.isoCode);
            setCities(stateCities);
        } else {
            setCities([]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { user, session, error } = await supabase.auth.signUp({
                email: formData.email,
                password: formData.password,
                // Additional user data
            });
            if (error) {
                console.error(error.message);
                // Handle error
            } else {
                // Sign up successful
                console.log("Sign up successful:", user);
                setIsLoggedIn(true); // Set isLoggedIn to true after successful sign-up
            }
        } catch (error) {
            console.error('Error signing up:', error.message);
            // Handle error
        }
    };

    const handleGoogleSignUp = () => {
        // Handle Google sign-up logic here
        console.log("Signing up with Google...");
    };

    if (isLoggedIn) {
        navigate('/login'); // Redirect using useNavigate
    }

    return (
        <>
            <div className='FormContainer'>
                <div className='wrap'>
                    <h2>Sign Up</h2>
                    <div className='photo' onClick={handleDefaultPhotoClick}>
                        {previewPhoto ? (
                            <img src={previewPhoto} alt="Profile Preview" />
                        ) : (
                            <img src={defaultProfilePhoto} alt="Default Profile" />
                        )}
                        <input
                            type="file"
                            name="profilePhoto"
                            style={{ display: 'none' }}
                            ref={fileInputRef}
                            onChange={handleChange}
                        />
                    </div>
                    <button className='addphoto' onClick={handleAddPhotoButtonClick}>Add Photo</button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='Email'>
                        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
                    </div>
                   
                    <div>
                        <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} />
                    </div>
                   
                    <div className='Nationality'>
                        <select name="nationality" onChange={handleCountryChange}>
                            <option value="">Select Nationality</option>
                            {countries.map(country => (
                                <option key={country.isoCode} value={country.name}>{country.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className='Location'>
                        <select name="location" onChange={handleStateChange}>
                            <option value="">Select State</option>
                            {states.map(state => (
                                <option key={state.isoCode} value={state.name}>{state.name}</option>
                            ))}
                        </select>
                    </div>


                     <div className='PhoneNumber'>
                        <input type="text" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} />
                    </div>

                    <div className='Password'>
                        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
                    </div>
                    <div className='ConfirmPassword'>
                        <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} />
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
                <div className='GoogleSignUp'>
                    <button onClick={handleGoogleSignUp}>Sign Up with Google</button>
                </div>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </>
    );
};

export default SignUp;
