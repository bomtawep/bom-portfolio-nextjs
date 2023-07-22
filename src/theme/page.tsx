import { Switch, changeTheme, useTheme } from '@nextui-org/react'
const Theme = () => {
    const { type, isDark } = useTheme();
  
    const handleChange = () => {
      const nextTheme = isDark ? 'light' : 'dark'
      window.localStorage.setItem('data-theme', nextTheme)
      changeTheme(nextTheme)
    }
  
    return (
      <div>
        {type}
        <Switch
          checked={isDark}
          onChange={handleChange}
          size={'xs'}
        />
      </div>
    )
  }
export default Theme
  