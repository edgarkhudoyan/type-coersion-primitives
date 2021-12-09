// What will be the result and why?

// 1. "" + 1 + 0
// 2. "" - 1 + 0
// 3. true + false
// Answer: 1
// Desc: true = 1, false = 0
// 4. 6 / "3"
// Answer: 2
// Desc: "3" converts to number
// 5. "2" \* "3"
// Answer: 6
// Desc: Strings convert to number
// 6. 4 + 5 + "px"
// Answer: "9px"
// Desc: number 4 + string "px" number converts to string and concats
// 7. "$" + 4 + 5
// Answer: "$45"
// Desc: Numbers convert to string and concats with $ sign
// 8. "4" - 2
// Answer: 2
// Desc: String becomes to number
// 9. "4px" - 2
// Answer: NaN
// Desc: "4px" is not a number
// 10. 7 / 0
// Answer: null
// Desc: Can't divide to 0
// 11. " -9 " + 5
// Answer: " -95 "
// Desc: 5 converts to string and concats to " -9 ". White spaces aren't removed
// 12. " -9 " - 5
// Answer: -14
// desc: " -9 " converts to number -9. White spaces are removed.
// 13. null + 1
// Answer: 1
// Desc: ToNumber(null) = 0
// 14. undefined + 1
// Answer: NaN
// Desc: ToNumber(undefined) = NaN
