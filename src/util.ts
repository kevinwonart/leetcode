export function arraysAreEqual<T>(array1: T[], array2: T[]): boolean {
    if (array1.length !== array2.length) {
        return false;
    }

    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }

    return true;
}

export function arraysAreEqualPermutation(arr1: any[], arr2: any[]): boolean {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1: Record<string | number, number> = {};
  let frequencyCounter2: Record<string | number, number> = {};

  // Counting frequency of each value in arr1
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  // Counting frequency of each value in arr2
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  // Comparing frequency counters
  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }

  return true;
}

export function arrays2DAreEqualPermutation<T>(arr1: T[], arr2: T[]): boolean {
  if (arr1.length !== arr2.length) return false;

  const sortFn = (a: T, b: T): number => {
    if (Array.isArray(a) && Array.isArray(b)) {
      return JSON.stringify(a.sort()) > JSON.stringify(b.sort()) ? 1 : -1;
    } else if (Array.isArray(a)) {
      return 1;
    } else if (Array.isArray(b)) {
      return -1;
    }
    return a > b ? 1 : -1;
  };

  arr1.sort(sortFn);
  arr2.sort(sortFn);

  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      if (!arraysAreEqual(arr1[i] as unknown as T[], arr2[i] as unknown as T[])) return false;
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}


