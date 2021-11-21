export const _handleDeleteProfile = (key: any) => {
    if (!key) {
        return
    }
    localStorage.removeItem(key);
}