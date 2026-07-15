import { useState } from 'react'
import './SettingsForm.css'

const DEFAULT_SETTINGS = {
  displayName: '',
  email: '',
  username: '',
  bio: '',
  theme: 'system',
  language: 'en',
  emailNotifications: true,
  pushNotifications: false,
}

function SettingsForm() {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS)
  const [savedMessage, setSavedMessage] = useState('')

  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setSettings((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
    setSavedMessage('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSavedMessage('Settings saved successfully.')
  }

  function handleReset() {
    setSettings(DEFAULT_SETTINGS)
    setSavedMessage('')
  }

  return (
    <form className="settings-form" onSubmit={handleSubmit}>
      <header className="settings-form__header">
        <h1>Settings</h1>
        <p>Manage your account preferences and notifications.</p>
      </header>

      <fieldset className="settings-form__section">
        <legend>Profile</legend>

        <label className="settings-form__field">
          <span>Display name</span>
          <input
            type="text"
            name="displayName"
            value={settings.displayName}
            onChange={handleChange}
            placeholder="Jane Doe"
            autoComplete="name"
          />
        </label>

        <label className="settings-form__field">
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={settings.email}
            onChange={handleChange}
            placeholder="jane@example.com"
            autoComplete="email"
            required
          />
        </label>

        <label className="settings-form__field">
          <span>Username</span>
          <input
            type="text"
            name="username"
            value={settings.username}
            onChange={handleChange}
            placeholder="janedoe"
            autoComplete="username"
          />
        </label>

        <label className="settings-form__field">
          <span>Bio</span>
          <textarea
            name="bio"
            value={settings.bio}
            onChange={handleChange}
            placeholder="Tell us a little about yourself"
            rows={3}
          />
        </label>
      </fieldset>

      <fieldset className="settings-form__section">
        <legend>Preferences</legend>

        <label className="settings-form__field">
          <span>Theme</span>
          <select name="theme" value={settings.theme} onChange={handleChange}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System</option>
          </select>
        </label>

        <label className="settings-form__field">
          <span>Language</span>
          <select
            name="language"
            value={settings.language}
            onChange={handleChange}
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </label>
      </fieldset>

      <fieldset className="settings-form__section">
        <legend>Notifications</legend>

        <label className="settings-form__checkbox">
          <input
            type="checkbox"
            name="emailNotifications"
            checked={settings.emailNotifications}
            onChange={handleChange}
          />
          <span>Email notifications</span>
        </label>

        <label className="settings-form__checkbox">
          <input
            type="checkbox"
            name="pushNotifications"
            checked={settings.pushNotifications}
            onChange={handleChange}
          />
          <span>Push notifications</span>
        </label>
      </fieldset>

      {savedMessage && (
        <p className="settings-form__message" role="status">
          {savedMessage}
        </p>
      )}

      <div className="settings-form__actions">
        <button type="button" className="settings-form__button secondary" onClick={handleReset}>
          Reset
        </button>
        <button type="submit" className="settings-form__button primary">
          Save changes
        </button>
      </div>
    </form>
  )
}

export default SettingsForm
