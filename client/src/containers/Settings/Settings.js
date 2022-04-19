import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Input from '../../components/Input/Input'
import Selected from '../../components/Selected/Selected'
import PrimaryButton from '../../components/Buttons/PrimaryButton'
import { roles } from '../../constants/constants'
import API from '../../api/api'
import getCookie from '../../utils/getCookie'
import './Settings.css'

const Settings = () => {
  const [discordUsername, setdiscordUsername] = useState('')
  const [discordUsernameError, setDiscordUsernameError] = useState('')
  const [status, setStatus] = useState('')
  const [statusError, setStatusError] = useState('')
  const [role, setRole] = useState('')
  const [roleError, setRoleError] = useState('')

  const id = getCookie('id')

  useEffect(() => {
    const options = {
      params: {
        id,
      },
    }
    API.get('member', options)
      .then((res) => {
        console.log(res)
        setdiscordUsername(res.data.discordName)
        setStatus(res.data.status)
        setRole(res.data.role)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const onSaveHandler = () => {
    const data = {
      id,
      discordName: discordUsername,
      status,
      role,
    }
    API.put('member', data)
      .then(() => {
        alert('Your profile settings have been succesfully updated.')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <Navbar />
      <div
        className='settings-container'
        style={{ marginLeft: '330px', marginTop: '2rem' }}
      >
        <div
          style={{
            width: '60%',
            border: '1px solid gray',
            padding: '2rem',
            borderRadius: '5px',
          }}
        >
          <h1>Edit Settings</h1>
          <Input
            value={discordUsername}
            onChange={(e) => {
              setdiscordUsername(e.target.value)
              if (discordUsernameError) {
                setDiscordUsernameError('')
              }
            }}
            label='Discord Username'
            errorMsg={discordUsernameError ? discordUsernameError : null}
          />
          <Selected
            label='My role is...'
            options={roles}
            value={{ value: role, label: role }}
            onChange={(e) => {
              setRole(e.value)
              if (roleError) {
                setRoleError('')
              }
            }}
            errorMsg={roleError ? roleError : null}
          />
          <Input
            value={status}
            onChange={(e) => {
              setStatus(e.target.value)
              if (statusError) {
                setStatusError('')
              }
            }}
            label='What are you working on?'
            errorMsg={statusError ? statusError : null}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '1rem',
            }}
          >
            <PrimaryButton onClick={onSaveHandler} title='Save' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Settings
