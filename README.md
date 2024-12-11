# IOButton

A minimal package with customizable React button.

## Class Name Mapping

| **Class Name**    | **Description**         | **Values**            |
| ----------------- | ----------------------- | --------------------- |
| `bg-dark`         | Dark background color   | `black`               |
| `bg-green`        | Green background color  | `green`               |
| `bg-blue`         | Blue background color   | `cadetblue`           |
| `bg-orange`       | Orange background color | `orange`              |
| `w-sm`            | Small width             | `60px`                |
| `w-md`            | Medium width            | `180px`               |
| `w-xl`            | Extra-large width       | `360px`               |
| `p-sm`            | Small padding           | `5px`                 |
| `p-md`            | Medium padding          | `15px`                |
| `p-xl`            | Extra-large padding     | `30px`                |
| `text-light`      | Light text color        | `white`               |
| `border-sm`       | Small border            | `1px solid`           |
| `border-md`       | Medium border           | `2px solid`           |
| `border-xl`       | Extra-large border      | `3px solid`           |
| `borderRadius-sm` | Small border radius     | `border-radius: 4px`  |
| `borderRadius-md` | Medium border radius    | `border-radius: 8px`  |
| `borderRadius-lg` | Large border radius     | `border-radius: 12px` |

---

## Usage Example

```tsx
<Button
  title="Submit"
  type="submit"
  onClick={handleSubmit}
  background="green"
  color="light"
  padding="md"
  width="md"
  border="md"
  borderRadius="md"
/>
```
