function truncateString(str, num) {
    return str.substring(0, num).length >= str.length ? str : str.substring(0, num) + "...";
}

console.log(truncateString("A-", 1));