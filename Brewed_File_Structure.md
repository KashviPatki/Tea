# BREWED — Full-Stack File Structure

## 1. Project Overview

**BREWED** is a social platform where users can anonymously or publicly share stories ("tea"), while other users can read, rate, react to, comment on, and save those stories.

The project is divided into three major layers:

```text
BREWED
│
├── frontend/
├── backend/
└── database/
```

---

# 2. Complete Project Structure

```text
BREWED/
│
├── frontend/
│   │
│   ├── public/
│   │   ├── logo.svg
│   │   ├── favicon.svg
│   │   └── images/
│   │       ├── tea-cup.png
│   │       ├── tea-leaves.png
│   │       └── illustrations/
│   │
│   ├── src/
│   │   │
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── Footer.jsx
│   │   │   │   └── MobileNav.jsx
│   │   │   │
│   │   │   ├── tea/
│   │   │   │   ├── TeaCard.jsx
│   │   │   │   ├── TeaMeter.jsx
│   │   │   │   ├── TeaRating.jsx
│   │   │   │   ├── ReactionBar.jsx
│   │   │   │   ├── TeaCategory.jsx
│   │   │   │   └── BrewOfTheDay.jsx
│   │   │   │
│   │   │   ├── comments/
│   │   │   │   ├── CommentSection.jsx
│   │   │   │   ├── CommentCard.jsx
│   │   │   │   └── CommentInput.jsx
│   │   │   │
│   │   │   ├── profile/
│   │   │   │   ├── ProfileCard.jsx
│   │   │   │   ├── ProfileStats.jsx
│   │   │   │   └── ProfileTabs.jsx
│   │   │   │
│   │   │   ├── common/
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── Modal.jsx
│   │   │   │   ├── Loading.jsx
│   │   │   │   ├── EmptyState.jsx
│   │   │   │   └── Toast.jsx
│   │   │   │
│   │   │   └── safety/
│   │   │       ├── ReportModal.jsx
│   │   │       ├── ContentWarning.jsx
│   │   │       └── CommunityGuidelines.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Explore.jsx
│   │   │   ├── Trending.jsx
│   │   │   ├── TeaDetails.jsx
│   │   │   ├── SpillTea.jsx
│   │   │   ├── Search.jsx
│   │   │   ├── Saved.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── TeaQuiz.jsx
│   │   │   ├── Settings.jsx
│   │   │   └── NotFound.jsx
│   │   │
│   │   ├── hooks/
│   │   │   ├── useAuth.js
│   │   │   ├── useTea.js
│   │   │   ├── useRating.js
│   │   │   ├── useComments.js
│   │   │   ├── useReactions.js
│   │   │   └── useSavedTea.js
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── assets/
│   │   │   ├── images/
│   │   │   └── icons/
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── styles.css
│   │
│   ├── package.json
│   ├── vite.config.js
│   └── .env
│
│
├── backend/
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── teaController.js
│   │   ├── commentController.js
│   │   ├── ratingController.js
│   │   ├── reactionController.js
│   │   ├── savedTeaController.js
│   │   ├── userController.js
│   │   └── reportController.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── teaRoutes.js
│   │   ├── commentRoutes.js
│   │   ├── ratingRoutes.js
│   │   ├── reactionRoutes.js
│   │   ├── savedTeaRoutes.js
│   │   ├── userRoutes.js
│   │   └── reportRoutes.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── Tea.js
│   │   ├── Comment.js
│   │   ├── Rating.js
│   │   ├── Reaction.js
│   │   ├── SavedTea.js
│   │   └── Report.js
│   │
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   ├── errorMiddleware.js
│   │   ├── validationMiddleware.js
│   │   └── moderationMiddleware.js
│   │
│   ├── services/
│   │   ├── authService.js
│   │   ├── teaService.js
│   │   ├── ratingService.js
│   │   ├── notificationService.js
│   │   └── moderationService.js
│   │
│   ├── config/
│   │   ├── database.js
│   │   └── environment.js
│   │
│   ├── utils/
│   │   ├── generateToken.js
│   │   └── helpers.js
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
│
├── database/
│   │
│   ├── schema/
│   │   ├── users.sql
│   │   ├── teas.sql
│   │   ├── comments.sql
│   │   ├── ratings.sql
│   │   ├── reactions.sql
│   │   ├── saved_teas.sql
│   │   └── reports.sql
│   │
│   ├── migrations/
│   │   ├── 001_initial_schema.sql
│   │   ├── 002_add_ratings.sql
│   │   ├── 003_add_reactions.sql
│   │   └── 004_add_reports.sql
│   │
│   ├── seed/
│   │   └── sample_data.sql
│   │
│   └── README.md
│
├── README.md
└── .gitignore
```

---

# 3. Frontend

The **frontend** contains everything the user sees and interacts with.

### Main responsibilities

- Display tea posts
- User registration and login
- Tea submission
- Tea rating
- Reactions
- Comments
- Search
- Trending section
- Saved teas
- User profiles
- Animations and responsive UI

### Important frontend pages

| File | Purpose |
|---|---|
| `Home.jsx` | Landing page and featured tea |
| `Explore.jsx` | Browse all tea |
| `Trending.jsx` | Most popular/trending tea |
| `TeaDetails.jsx` | Full story, rating and comments |
| `SpillTea.jsx` | Submit a new tea |
| `Search.jsx` | Search stories and users |
| `Saved.jsx` | User's saved stories |
| `Profile.jsx` | User profile |
| `TeaQuiz.jsx` | "What kind of tea are you?" quiz |
| `Login.jsx` | User login |
| `Signup.jsx` | Account creation |

---

# 4. Backend

The **backend** handles the application's business logic and API requests.

### Main responsibilities

- Authentication
- Authorization
- CRUD operations for tea
- Ratings
- Reactions
- Comments
- Saved stories
- User profiles
- Reporting and moderation
- Validation
- Database communication

### Example API endpoints

```text
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/logout

GET    /api/teas
GET    /api/teas/:id
POST   /api/teas
PUT    /api/teas/:id
DELETE /api/teas/:id

POST   /api/teas/:id/rating
POST   /api/teas/:id/reaction

GET    /api/teas/:id/comments
POST   /api/teas/:id/comments
DELETE /api/comments/:id

POST   /api/teas/:id/save
DELETE /api/teas/:id/save

GET    /api/users/:id
PUT    /api/users/:id

POST   /api/reports
```

---

# 5. Database

The database stores all persistent application data.

For Brewed, **PostgreSQL** is recommended because the application contains many relationships between users, teas, comments, ratings and reactions.

## Main tables

### users

```text
users
├── id
├── username
├── email
├── password_hash
├── avatar_url
├── bio
└── created_at
```

### teas

```text
teas
├── id
├── user_id
├── title
├── content
├── category
├── is_anonymous
├── views
├── created_at
└── updated_at
```

### comments

```text
comments
├── id
├── tea_id
├── user_id
├── content
└── created_at
```

### ratings

```text
ratings
├── id
├── tea_id
├── user_id
├── rating
└── created_at
```

Rating should be between **1 and 10**.

### reactions

```text
reactions
├── id
├── tea_id
├── user_id
├── reaction_type
└── created_at
```

Possible reactions:

```text
😂
😭
😳
👀
❤️
🔥
💀
```

### saved_teas

```text
saved_teas
├── id
├── tea_id
├── user_id
└── created_at
```

### reports

```text
reports
├── id
├── tea_id
├── user_id
├── reason
├── description
├── status
└── created_at
```

---

# 6. Database Relationships

```text
                    USERS
                      │
             ┌────────┼────────┐
             │        │        │
             ↓        ↓        ↓
           TEAS    COMMENTS  SAVED_TEAS
             │
       ┌─────┼─────┬─────────┐
       ↓     ↓     ↓         ↓
    RATINGS REACTIONS COMMENTS REPORTS
```

More specifically:

```text
User
 │
 ├──────────< Tea
 │             │
 │             ├──────────< Comment
 │             ├──────────< Rating
 │             ├──────────< Reaction
 │             ├──────────< SavedTea
 │             └──────────< Report
 │
 └──────────< Comment
```

`<` means one-to-many.

For example:

```text
One User → Many Teas
One Tea  → Many Comments
One Tea  → Many Ratings
One Tea  → Many Reactions
```

---

# 7. Overall Architecture

```text
                 ┌─────────────────────┐
                 │       USER          │
                 └──────────┬──────────┘
                            │
                            ↓
                 ┌─────────────────────┐
                 │      FRONTEND       │
                 │ React + Tailwind    │
                 └──────────┬──────────┘
                            │
                       HTTP / REST API
                            │
                            ↓
                 ┌─────────────────────┐
                 │       BACKEND       │
                 │ Node.js + Express   │
                 └──────────┬──────────┘
                            │
                            ↓
                 ┌─────────────────────┐
                 │      DATABASE       │
                 │     PostgreSQL      │
                 └─────────────────────┘
```

---

# 8. Technology Stack

| Layer | Technology |
|---|---|
| Frontend | React |
| Styling | Tailwind CSS |
| Build Tool | Vite |
| Backend | Node.js |
| API | Express.js |
| Database | PostgreSQL |
| Authentication | JWT |
| API Communication | REST |
| Version Control | Git + GitHub |

---

# 9. Development Flow

When a user submits tea:

```text
User
 ↓
SpillTea.jsx
 ↓
api.js
 ↓
POST /api/teas
 ↓
teaController.js
 ↓
teaService.js
 ↓
Tea model
 ↓
PostgreSQL
 ↓
Tea successfully stored
 ↓
Response sent to frontend
 ↓
New TeaCard appears
```

When a user rates tea:

```text
TeaRating.jsx
 ↓
api.js
 ↓
POST /api/teas/:id/rating
 ↓
ratingController.js
 ↓
ratingService.js
 ↓
ratings table
 ↓
Average rating updated
 ↓
TeaMeter.jsx displays new rating
```

---

# 10. Recommended Development Order

Build the project in this order:

1. **Frontend UI**
   - Navbar
   - Home page
   - Tea cards
   - Tea details
   - Spill Tea page

2. **Backend setup**
   - Express server
   - Routes
   - Controllers
   - Middleware

3. **Database**
   - Users
   - Teas
   - Comments
   - Ratings
   - Reactions
   - Saved teas

4. **Authentication**
   - Register
   - Login
   - Logout
   - Protected routes

5. **Core features**
   - Create tea
   - Read tea
   - Rate tea
   - React
   - Comment
   - Save

6. **Advanced features**
   - Trending algorithm
   - Tea Meter
   - Brew of the Day
   - Search
   - Tea Quiz
   - Reporting/moderation

7. **Final polish**
   - Animations
   - Responsive design
   - Loading states
   - Error handling
   - Accessibility
   - Security

---

# 11. Final Project Architecture

```text
                         BREWED
                           │
             ┌─────────────┼─────────────┐
             │             │             │
             ↓             ↓             ↓
        FRONTEND        BACKEND       DATABASE
             │             │             │
       React/Vite       Express       PostgreSQL
             │             │             │
       Components       Routes        Tables
       Pages            Controllers   Relationships
       Hooks            Services      Migrations
       API Client       Middleware    Seed Data
             │             │             │
             └─────────────┼─────────────┘
                           │
                    COMPLETE SYSTEM
```

This structure keeps **UI, application logic, and data storage separated**, making Brewed easier to develop, debug, scale, and explain during a hackathon or project presentation.
