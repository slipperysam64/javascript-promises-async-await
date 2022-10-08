export function fetchWithTImeout(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
}