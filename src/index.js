module.exports = function longestConsecutiveLength(array) {
    if(array.length === 0){
        return 0;
    } else {
        const work_arr = [...array];
        work_arr.sort((left, right) => left - right);

        let longest_streak = 1,
            current_streak = 1;

        for(let i = 1; i < work_arr.length; i++){
            if(work_arr[i] !== work_arr[i - 1]){
                if(work_arr[i] === work_arr[i - 1] + 1){
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
