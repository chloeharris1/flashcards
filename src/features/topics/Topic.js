import { Link, useParams } from "react-router-dom";
import ROUTES from "../../app/routes";
// import useSelector to use with selectTopics
import { useSelector } from "react-redux";
// import selector defined in the topicsSlice
import { selectTopics } from "./topicsSlice";
import { selectQuizzes } from "../quizzes/quizzesSlice";

export default function Topic() {
  // call to the selector to select all the topics in state
  const topics = useSelector(selectTopics);
  // call to your selector to select all the quizzes in state
  const quizzes = useSelector(selectQuizzes);
  let { topicId } = useParams();
  const topic = topics[topicId];
  const quizzesForTopic = topic.quizIds.map((quizId) => quizzes[quizId]);

  return (
    <section>
      <img src={topic.icon} alt="" className="topic-icon" />
      <h1>Topic: {topic.name}</h1>
      <ul className="quizzes-list">
        {quizzesForTopic.map((quiz) => (
          <li className="quiz" key={quiz.id}>
            <Link to={ROUTES.quizRoute(quiz.id)}>{quiz.name}</Link>
          </li>
        ))}
      </ul>
      <Link
        to="/quizzes/new"
        id="create-new-quiz-button"
        className="button center"
      >
        Create a New Quiz
      </Link>
    </section>
  );
}
