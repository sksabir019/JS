/**
 * Fetch with retyr logic in JavaScript.
 */
const fetchWithRetry = async (url, options = {}, retries = 3, backoff = 300) => {
    for (let i = 0; i < retries; i++) { 
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json(); // or response.text() based on your needs
        } catch (error) {
            if (i === retries - 1) {
                throw error; // rethrow the error if it's the last attempt
            }
            console.log(`Attempt ${i + 1} failed. Retrying in ${backoff}ms...`);
            await new Promise(res => setTimeout(res, backoff));
            backoff *= 2; // Exponential backoff
        }
    }
};

// Example usage:
fetchWithRetry('https://jsonplaceholder.typicode.com/posts/1', {}, 5, 500)
    .then(data => console.log(data))
    .catch(error => console.error('Fetch failed:', error)); 