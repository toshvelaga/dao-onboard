import { useState } from 'react'
import OnboardingFlow from '../../components/OnboardingFlow/OnboardingFlow'
import Input from '../../components/Input/Input'
import Selected from '../../components/Selected/Selected'
import { roles, stepData } from '../../constants/constants'
import setCookie from '../../utils/setCookie'
import { useNavigate } from 'react-router-dom'
import API from '../../api/api'
import DateInput from '../../components/Input/DateInput'
import TimeInput from '../../components/Input/TimeInput'
import OnboardingIntro from '../../components/OnboardingFlow/OnboardingIntro'
import currentDate from '../../utils/currentDate'
import * as FaIcons from 'react-icons/fa'
import './Onboarding.css'

function Onboarding() {
  const [stepIndex, setStepIndex] = useState(0)
  const [discordUsername, setdiscordUsername] = useState('')
  const [discordUsernameError, setDiscordUsernameError] = useState('')
  const [status, setStatus] = useState('')
  const [statusError, setStatusError] = useState('')
  const [role, setRole] = useState('')
  const [roleError, setRoleError] = useState('')
  const [onboardDate, setOnboardDate] = useState(currentDate())
  const [onboardTime, setOnboardTime] = useState('09:00')

  let navigate = useNavigate()

  const onboardingContent = () => {
    switch (stepIndex) {
      case 0:
        return <OnboardingIntro />
      case 1:
        return (
          <div style={{ width: '100%' }}>
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
              value={role}
              onChange={(e) => {
                setRole(e)
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
          </div>
        )
      case 2:
        return (
          <div style={{ marginBottom: '2rem' }}>
            <DateInput
              label='Chose a day'
              value={onboardDate}
              onChange={(e) => {
                console.log(e.target.value)
                setOnboardDate(e.target.value)
              }}
            />
            <TimeInput
              label='Chose a time'
              value={onboardTime}
              onChange={(e) => {
                console.log(e.target.value)
                setOnboardTime(e.target.value)
              }}
            />
          </div>
        )
      case 3:
        return null
      default:
        return null
    }
  }

  const handleSubmit = () => {
    const data = {
      discordName: discordUsername,
      status,
      role: role.value,
      onboardDate,
      onboardTime,
    }
    API.post('/members', data)
      .then((res) => {
        console.log(res)
        setCookie('onboarding', 'completed', 365)
        setCookie('id', res.data._id, 365)
        navigate('/members')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleStepChange = () => {
    if (stepIndex === 1) {
      errorHandling()
    } else if (stepIndex !== 3) {
      setStepIndex(stepIndex + 1)
    }
    if (stepIndex === 3) {
      console.log('onboarding')
      handleSubmit()
    }
  }

  const errorHandling = () => {
    if (!discordUsername) {
      setDiscordUsernameError('Discord username is required')
    }
    if (!status) {
      setStatus('Add what you are currently working on')
    }
    if (!role) {
      setRoleError('Role is required')
    }
    if (discordUsername && status && role) {
      setStepIndex(stepIndex + 1)
    }
  }

  const check = (step) => {
    if (step <= stepIndex) {
      return <FaIcons.FaCheck />
    } else return step
  }

  return (
    <div>
      <OnboardingFlow
        steps={[check(1), check(2), check(3)]}
        title={stepData[stepIndex].title}
        btnTitle={stepData[stepIndex].btnTitle}
        onClick={handleStepChange}
      >
        {onboardingContent()}
      </OnboardingFlow>
    </div>
  )
}

export default Onboarding
