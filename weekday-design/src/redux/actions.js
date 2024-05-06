export const FETCH_JOBS = 'FETCH_JOBS';

export const fetchJobs = () => {
    // Implement fetch logic here
    return async (dispatch) => {
        try {
            dispatch({ type: 'FETCH_DATA_REQUEST' });
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const body = JSON.stringify({
                "limit": 10,
                "offset": 0
            });

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body
            };

            const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
                // .then((response) => response.text())
                // .then((result) => console.log(result))
                // .catch((error) => console.error(error));
            // const response = await fetch('/api/data');
            const data = await response.json();
            console.log(data)
            dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
        } catch (error) {
            dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
        }
    };
};

export const APPLY_FILTERS = 'APPLY_FILTERS';

export const applyFilters = (filters) => {
    // Implement filter logic here
};
