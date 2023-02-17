export function countArrayOverlap<T>(a: T[], b: T[]) {
    return a.filter((i) => b.includes(i)).length;
}