// import React from "react";
// import { useState } from "react";
// import MsgInfo from "../models/MsgInfo";

// type MessagesContextObj = {
//   items: MsgInfo[];
// //   addTodo: (text: string) => void;
// //   removeTodo: (id: string) => void;
// };

// export const MessagesContext = React.createContext<MessagesContextObj>({
//   items: [],
// //   addTodo: () => {},
// //   removeTodo: (id: string) => {},
// });

// const MessagesContextProvider: React.FC<{children: React.ReactNode;}> = (props) => {
//   const [messages, setMessages] = useState<MsgInfo[]>([]);


// //   const addTodoHandler = (todoText: string) => {
// //     const newTodo = new Todo(todoText);
// //     setMessages((prevmessages) => {
// //       return prevmessages.concat(newTodo);
// //     });
// //   };

// //   const removeTodoHandler = (todoId: string) => {
// //     setMessages((prevmessages) => {
// //       return prevmessages.filter((todo) => todo.id !== todoId);
// //     });
// //   };

//   const contextValue: MessagesContextObj = {
//     items: messages,
//     // addTodo: addTodoHandler,
//     // removeTodo: removeTodoHandler,
//   };

//   return (
//     <MessagesContext.Provider value={contextValue}>
//       {props.children}
//     </MessagesContext.Provider>
//   );
// };

// export default MessagesContextProvider;
