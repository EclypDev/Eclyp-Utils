async function createUser(url, data) {
    const res = await fetch(url, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(data),
    });

    return res.json();
}
