import React from 'react'
import styles from './Skills.module.css'
import history from '../../data/history.json'
import  skills from '../../data/skills.json'
import { getImageUrl } from '../../utils'
const Skills = () => {
  return (
    <section className={styles.container} id='skills'>
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.content}>
            <div className={styles.skills}>{
                skills.map((skill,id) => {
                    return <div key={id} className={styles.skill}>
                            <div className={styles.skillImageContainer}><img src={getImageUrl(skill.imageSrc)} alt={skill.title} /></div>
                            <p>{skill.title}</p>
                    </div>
                })
                }</div>
            <ul className={styles.history}>
                {
                    history.map((historyItem,id)=>{
                        return <li key={id} className={styles.historyItem}>
                            <img src={getImageUrl(historyItem.imageSrc)} alt= {`${historyItem.organisation} Logo`} />
                            <div className={styles.historyItemDetails}>
                                <h3>{`${historyItem.role}@${historyItem.organisation}`}</h3>
                                <p>{`${historyItem.startDate}-${historyItem.endDate}`}</p>
                                <ul>{historyItem.experiences.map((experiences,id)=>{
                                    return <li key={id}>{experiences}</li>
                                })}</ul>
                            </div>
                        </li>
                    })
                }
            </ul>
        </div>
    </section>
  )
}

export default Skills
