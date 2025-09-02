# tech-chantier-warmup1-auth-flow

A React Native Expo authentication flow warmup task, inspired by [this Dribbble design](https://dribbble.com/shots/19188312-Onboarding-Sign-in-And-Sign-Up-Mobile-App-Design).

## Features

- **Onboarding Screen**: Welcome users with a clean, modern intro.
- **Sign In & Register Screens**: Manual form validation, no external libraries.
- **Reusable Components**: CustomButton, CustomInput, InfoModal.
- **Consistent Native Styling**: All styles via React Native's `StyleSheet`.
- **Modal on Submit**: Shows entered info with "Close" and "Close and clear" actions.
- **Separation of Concerns**: Clear file structure and naming conventions.
- **Safe Area & Keyboard Handling**: Ensures content is visible and accessible.

## File Structure

```
app/
  _layout.tsx           # Root layout (navigation, keyboard handling)
  index.tsx             # Onboarding screen
  auth/
    sign-in.tsx         # Sign In screen
    register.tsx        # Register screen
  components/
    CustomButton.tsx    # Reusable button
    CustomInput.tsx     # Reusable input
    InfoModal.tsx       # Reusable info modal
  constants/
    colors.ts           # Color palette
assets/
  my-assets/            # Images/icons for onboarding and social auth
```

## Manual Validation

- All forms are validated in code (no external validator).
- Errors are shown inline below each input.

## Modal Behavior

- On successful form submission, a modal displays all entered information.
- **BTN1: Close** — closes the modal.
- **BTN2: Close and clear** — closes the modal and resets the form.

## How to Run

1. **Clone the repo:**
   ```
   git clone https://github.com/rickytabe2/tech-chantier-warmup1-auth-flow.git
   cd tech-chantier-warmup1-auth-flow
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Start the Expo project:**
   ```
   npx expo start
   ```

4. **Run on your device or emulator.**

## Submission

- **GitHub Repo:** Publicly available at [`tech-chantier-warmup1-auth-flow`](https://github.com/rickytabe2/tech-chantier-warmup1-auth-flow)
- **Video Walkthrough:** [YouTube Unlisted Link](https://youtube.com/your-video-link)
  - Explains features and demonstrates usage
