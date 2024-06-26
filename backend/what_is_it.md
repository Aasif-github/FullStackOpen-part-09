to start project - backend
> npm run dev

to start project - frontend
>  npm run dev





## Type assertion
Type assertion in TypeScript is a way to tell the compiler explicitly about the type of a variable, helping it understand your code better when you know more about the type than the compiler does. This can be particularly useful in several scenarios such as dealing with third-party libraries, complex type situations, and when migrating JavaScript code to TypeScript. 

### Why We Need Type Assertion

1. **Bypassing Type Inference**:
   Sometimes TypeScript's type inference might not be sufficient to determine the exact type of a variable. Type assertion can help in such cases to ensure the correct type is enforced.

2. **Interoperability with JavaScript**:
   When interacting with JavaScript libraries or APIs that don't have TypeScript type definitions, type assertion helps you ensure that the objects you're working with conform to expected types.

3. **Complex Type Situations**:
   In situations where the type of a variable is too complex for TypeScript to infer, or where the type could be more specific than what TypeScript can deduce, type assertion provides clarity and specificity.

4. **Type Narrowing**:
   Sometimes, you might know more about the type of a variable in a specific context than TypeScript can infer. Type assertion allows you to inform the compiler about this specific knowledge, helping avoid type errors.

5. **Code Migration**:
   When migrating a large JavaScript codebase to TypeScript, type assertions can help during the transitional phase where types are gradually being added.

### Examples of Type Assertion

#### Example 1: Bypassing Type Inference

Suppose you have a variable with an unknown type, but you know it's supposed to be a string:

```typescript
let someValue: any = "Hello, TypeScript!";
let strLength: number = (someValue as string).length;

console.log(strLength); // Output: 16
```

Here, `someValue` is of type `any`, but you know it's a string, so you use `as string` to assert its type.

#### Example 2: Interoperability with JavaScript

When working with a JavaScript library that returns a broad type like `any`, you can use type assertion to specify a more precise type:

```typescript
// Suppose fetchData() returns any type
declare function fetchData(): any;

interface User {
  name: string;
  age: number;
}

let userData = fetchData();
let user = userData as User;

console.log(user.name, user.age);
```

#### Example 3: Complex Type Situations

Type assertion can help when the type is complex or nested:

```typescript
interface Shape {
  kind: string;
  size: number;
}

let shape: any = { kind: "circle", size: 10 };

// Type assertion to specific interface
let circle = shape as Shape;

console.log(circle.kind, circle.size);
```

#### Example 4: Type Narrowing

Consider a scenario where a function can return multiple types:

```typescript
function getElement(): HTMLElement | null {
  return document.querySelector("#myElement");
}

let myElement = getElement();

if (myElement) {
  // Assert myElement is of type HTMLElement
  (myElement as HTMLElement).style.backgroundColor = "red";
}
```

#### Example 5: Migrating Code

When converting JavaScript code to TypeScript, type assertions can help during the transition:

```javascript
// JavaScript code
function getData() {
  return { name: "John", age: 30 };
}

let data = getData();
let user = data as { name: string; age: number };

console.log(user.name, user.age);
```

### Syntax of Type Assertion

TypeScript supports two forms of type assertions:

1. **As-Syntax**:
   ```typescript
   let value: any = "some string";
   let strLength: number = (value as string).length;
   ```

2. **Angle-Bracket Syntax**:
   ```typescript
   let value: any = "some string";
   let strLength: number = (<string>value).length;
   ```

   Note: The angle-bracket syntax is not allowed in `.tsx` files (used for React with TypeScript), so the `as` syntax is generally preferred.

### Conclusion

Type assertions in TypeScript are a powerful tool for developers to inform the compiler about the intended type of a variable. This is particularly useful in situations where TypeScript's type inference is insufficient, when working with dynamic data from JavaScript libraries, or during gradual code migrations. By providing explicit type information, type assertions help improve code safety, clarity, and maintainability.



## Utility Type
https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys


## Mapping Arrays to Object

Certainly! Let's break down this TypeScript code snippet step by step:

```typescript
const diaryEntries: DiaryEntry[] = data.map(obj => {
  const object = toNewDiaryEntry(obj) as DiaryEntry;
  object.id = obj.id;
  return object;
});
```

### What the Code Does

1. **Declaration of `diaryEntries`**:
   - `const diaryEntries: DiaryEntry[]` declares a constant variable `diaryEntries` that is an array of `DiaryEntry` objects.

2. **Mapping `data` to `diaryEntries`**:
   - `data.map(obj => { ... })` iterates over each element in the `data` array, transforming each element (`obj`) according to the function provided.

3. **Transforming Each `obj`**:
   - `const object = toNewDiaryEntry(obj) as DiaryEntry;` calls the function `toNewDiaryEntry` with `obj` as the argument, transforming `obj` into a new diary entry. The `as DiaryEntry` part is a type assertion, indicating that the returned value should be treated as a `DiaryEntry` type.

4. **Setting the `id` Property**:
   - `object.id = obj.id;` sets the `id` property of the newly created `object` to be the same as the `id` property of the original `obj`. This ensures that the `id` is carried over to the new `DiaryEntry` object.

5. **Returning the Transformed Object**:
   - `return object;` returns the transformed object, which will be added to the `diaryEntries` array.

### Purpose of the Code

The purpose of this code is to convert an array of objects (`data`) into an array of `DiaryEntry` objects (`diaryEntries`). Each object in the `data` array is processed by `toNewDiaryEntry`, and its `id` property is preserved. The resulting array is a new array of `DiaryEntry` objects, each with the same `id` as the corresponding original object in `data`.

### Assumptions

- `data` is an array of objects that contain at least an `id` property.
- `toNewDiaryEntry` is a function that takes an object from `data` and transforms it into a new `DiaryEntry`.
- `DiaryEntry` is a TypeScript type or interface that defines the structure of a diary entry object.

### Example

If `data` looks like this:

```typescript
const data = [
  { id: 1, title: "Day 1", content: "Went to the park" },
  { id: 2, title: "Day 2", content: "Read a book" }
];
```

And assuming `toNewDiaryEntry` processes these objects appropriately, after running the code, `diaryEntries` might look like this:

```typescript
const diaryEntries = [
  { id: 1, title: "Day 1", content: "Went to the park" },
  { id: 2, title: "Day 2", content: "Read a book" }
];
```

Each object in the `data` array is transformed into a `DiaryEntry`, and their `id` properties are preserved.

```js
 const weather = {
     sunny: "sunny-",
     rainy: "rainy-",
     cloudy:"cloudy-"
 }
 
 const result = Object.values(weather).map(v => v.toString()).includes('sunny-');
 console.log(result); //true
```