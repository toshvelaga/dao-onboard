import React, { useEffect, useState } from 'react'
import API from '../../api/api'
import Navbar from '../../components/Navbar/Navbar'
import Role from '../../components/Role/Role'
import Selected from '../../components/Selected/Selected'
import { sortBy, roles } from '../../constants/constants'
import './Members.css'

const Members = () => {
  const [membersData, setMembersData] = useState([])
  const [filteredRole, setFilteredRole] = useState('')
  const [sortedBy, setSortedBy] = useState('')

  useEffect(() => {
    API.get('/members')
      .then((res) => {
        console.log(res.data)
        setMembersData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const sort = (members) => {
    if (sortedBy === 'A-Z: Discord Name') {
      return members.sort((a, b) => {
        return a.discordName.localeCompare(b.discordName)
      })
    } else if (sortedBy === 'Date') {
      return members.sort((a, b) => {
        return b.createdAt.localeCompare(a.createdAt)
      })
    } else return members
  }

  return (
    <>
      <Navbar />

      <div className='members-container' style={{ marginLeft: '200px' }}>
        <div
          style={{
            width: '85%',
            border: '1px solid grey',
            borderRadius: '5px',
            margin: '2rem auto',
            padding: '2rem',
          }}
        >
          <h1>Members Directory</h1>

          <div style={{ display: 'flex' }}>
            <h2 style={{ width: '35%', color: 'grey' }}>
              All Members: {membersData.length}
            </h2>
            <Selected
              style={{ width: '20%', marginRight: '5rem' }}
              placeholder='Sort by...'
              options={sortBy}
              value={sortedBy.value}
              onChange={(e) => {
                console.log(e.value)
                setSortedBy(e.value)
              }}
              background={'transparent'}
              border={'1px solid grey'}
            />
            <Selected
              // style={{ width: '20%', float: 'right' }}
              placeholder='Filter by role...'
              options={roles}
              value={filteredRole.value}
              onChange={(e) => {
                console.log(e.value)
                setFilteredRole(e.value)
              }}
              background={'transparent'}
              border={'1px solid grey'}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p style={{ width: '35%' }}>Member details</p>
            <p style={{ width: '20%' }}>Discord name</p>
            <p style={{ width: '20%' }}>Date joined</p>
            <p style={{ width: '20%' }}>Role</p>
          </div>
          <hr></hr>
          {sort(membersData)
            .filter((member) =>
              !filteredRole ? member : member.role === filteredRole
            )
            .map((member) => {
              return (
                <>
                  <div
                    className='member-details'
                    key={member._id}
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <p style={{ width: '35%' }}>{member.status}</p>
                    <p style={{ width: '20%' }}>{member.discordName}</p>
                    <p style={{ width: '20%' }}>{member.dateJoined}</p>
                    <div style={{ width: '20%' }}>
                      <Role title={member.role} />
                    </div>
                  </div>
                  <hr style={{ border: '.5px solid grey' }}></hr>
                </>
              )
            })}
        </div>
      </div>
    </>
  )
}

export default Members
