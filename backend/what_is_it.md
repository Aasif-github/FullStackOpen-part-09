to start project - backend
> npm run dev

to start project - frontend
> 





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
