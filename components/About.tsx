import FadeIn from "./FadeIn";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about} id="about" aria-label="About the project">
      <div className="container">
        <FadeIn className={styles.inner} dir="rtl" lang="he">
          <h2 className={styles.heading}>About the collection</h2>
          <p className={styles.body}>
            הקולקציה עוסקת בתקשורת של פעם – תקופה שבה מכתבים, בולים ומעטפות היו
            חלק בלתי נפרד מהדרך שבה אנשים שמרו על קשר. בעולם שבו התקשורת הפכה
            למיידית ודיגיטלית, בחרתי לחזור אל אותם רגעים יומיומיים שעוררו
            ציפייה, רגש ומשמעות. באמצעות מוטיבים של בולים, מעטפות, חותמות ומרקמים
            של חריטות, הקולקציה מעניקה פרשנות עכשווית לעולם התקשורת הישן.
          </p>
          <p className={styles.body}>
            המותג Marni נבחר כבסיס לעיצוב הקולקציה בזכות השפה הוויזואלית הייחודית
            שלו, המשלבת בין אמנות, טקסטורות, צבעוניות עשירה והדפסים בעלי אופי
            ידני. ערכי המותג משתלבים באופן טבעי עם הקונספט של הקולקציה, ומאפשרים
            לחבר בין נוסטלגיה לעיצוב עכשווי.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
