async function deleteUser(url = "") {
    const res = await fetch(url, { method: "DELETE" });
    return res.json();
}
