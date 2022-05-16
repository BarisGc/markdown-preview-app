import { createSlice } from "@reduxjs/toolkit";

const help = `Heading
=======
Sub-heading
-----------
### Another deeper heading
Paragraphs are separated
by a blank line.
Leave 2 spaces at the end of a line to do a
line break
Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .
Shopping list:
  * apples
  * oranges
  * pears
Numbered list:
  1. apples
  2. oranges
  3. pears
The rain---not the reign---in
Spain.
 *[Herman Fassett](https://freecodecamp.com/hermanfassett)*`;

export const markdownTextSlice = createSlice({
    name: 'markdownText',
    initialState: {
        isClicked: false,
        userText: 'this is user input',
        textHelp: help,
    },
    reducers: {
        changeIsClicked: (state, action) => {
            state.isClicked = action.payload;
        },
        changeUserText: (state, action) => {
            state.userText = action.payload;
        },
    }
});

export const { changeIsClicked, changeUserText } = markdownTextSlice.actions;
export const isClicked = (state) => state.markdownText.isClicked;
export const textHelp = (state) => state.markdownText.textHelp;
export const userText = (state) => state.markdownText.userText;
export default markdownTextSlice.reducer;