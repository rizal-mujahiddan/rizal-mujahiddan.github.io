# React / Next.js Naming Convention

## Component

PascalCase

UserCard.tsx
LoginForm.tsx
SidebarMenu.tsx

## Hook

camelCase + prefix use

useAuth.ts
useDarkMode.ts
useUser.ts

## Function

camelCase

formatCurrency()
calculateTax()
fetchUsers()

## Variable

camelCase

userData
isLoading
totalPrice

## Constant

UPPER_SNAKE_CASE

API_BASE_URL
MAX_FILE_SIZE
DEFAULT_THEME

## Type / Interface

PascalCase

User
LoginRequest
ApiResponse

## Folder

lowercase aja (tanpa kebab-case)

components
hooks
services
features
utils

## Next.js Route Folder

lowercase

app
dashboard
profile
settings

## CSS Module

PascalCase.module.css

Button.module.css
UserCard.module.css

## Context

PascalCase

AuthContext
ThemeContext

## Store

camelCase

authStore.ts
userStore.ts

## Enum

PascalCase

UserRole
PaymentStatus

## File Recommendation

UserCard.tsx
UserCard.module.css
UserCard.types.ts

## General Rule

Component -> PascalCase
Hook -> use + camelCase
Function -> camelCase
Variable -> camelCase
Constant -> UPPER_SNAKE_CASE
Folder -> lowercase
