module.exports = function longestConsecutiveLength(array) {
    if(array.length === 0){
        return 0;
    } else {
        array.sort((left, right) => left - right);

        let longest_streak = 1,
            current_streak = 1;

        for(let i = 1; i < array.length; i++){
            if(array[i] !== array[i - 1]){
                if(array[i] === array[i - 1] + 1){
                    current_streak++;
                } else {
                    longest_streak = Math.max(longest_streak, current_streak);
                    current_streak = 1;
                }
            }
        }

        return Math.max(longest_streak, current_streak);
    }
}
