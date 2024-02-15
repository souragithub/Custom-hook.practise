import { fireEvent, render, screen } from '@testing-library/react';
import Profile from '../Profile';

// test('renders learn react link', async() => {
//   render(<Profile/>);
//   const headingElement = screen.getByText(/Hello/i);
//   expect(headingElement).toBeInTheDocument();
// });

// // it('renders learn react link', async() => {
// //     render(<Profile/>);
// //     const headingElement = screen.getByRole("heading");
// //     expect(headingElement).toBeInTheDocument();
// //   });

// // it('renders learn react link', async() => {
// //     render(<Profile/>);
// //     const headingElement = screen.getByTitle("name");
// //     expect(headingElement).toBeInTheDocument();
// // });

// // it('renders learn react link', async() => {
// //     render(<Profile/>);
// //     const headingElement = screen.getByTestId("name-2");
// //     expect(headingElement).toBeInTheDocument();
// // });

// // it('renders learn react link', async() => {
// //     render(<Profile/>);
// //     const headingElement = await screen.findByText("Hello");
// //     expect(headingElement).toBeInTheDocument();
// //   });

// //   it('renders learn react link', async() => {
// //     render(<Profile/>);
// //     const headingElement = screen.queryByText("Primsann");
// //     expect(headingElement).not.toBeInTheDocument();
// //   });

// //   it('renders learn react link', async() => {
// //     render(<Profile/>);
// //     const headingElements = screen.getAllByRole("heading");
// //     expect(headingElements.length).toBe(2);
// //   });

// test('get the text cats', async() => {
//   render(<Profile/>);
//   const headingElement = screen.getByText(/Cats/i);
//   expect(headingElement).toBeInTheDocument();
// });

// test("get button function", async() => {
//   render(<Profile/>);
//   let textareaElement = screen.getByPlaceholderText("Write something here");
//   expect(textareaElement).toBeInTheDocument();
// })

// describe("Render the group of the text and input field", () => {
//   test("get button function", async() => {
//     render(<Profile/>);
//     let textareaElement = screen.getByPlaceholderText("Write something here");
//     expect(textareaElement).toBeInTheDocument();
//   })

//   test('get the text cats', async() => {
//     render(<Profile/>);
//     const headingElement = screen.getByText(/Cats/i);
//     expect(headingElement).toBeInTheDocument();
//   });

//   describe.skip("Render nested element", () => {
//     test('get the text cats', async() => {
//       render(<Profile/>);
//       const headingElement = screen.getByText(/Cats/i);
//       expect(headingElement).toBeInTheDocument();
//     });
//   })

//   describe("Render skipped ", () => {
//     test("get button function", async() => {
//       render(<Profile/>);
//       let textareaElement = screen.getByPlaceholderText("Write something here");
//       expect(textareaElement).toHaveAttribute("title" , "text-input");
//     })
//   })

// })

test("Check Input Box Value", ()=> {
  render(<Profile/>);
  let inputElement = screen.getByRole("textbox");
  fireEvent.change(inputElement,{target:{value:'a'}});
  expect(inputElement.value).toBe("a");
})