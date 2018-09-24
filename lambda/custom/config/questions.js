'use strict';
/*
 * Copyright 2018 Amazon.com, Inc. and its affiliates. All Rights Reserved.
 * Licensed under the Amazon Software License (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 * http://aws.amazon.com/asl/
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */


/**
 * Questions library
 *
 * Use this file to create your own set of questions.
 *
 * Object properties:
 *      index:          The index of the question in this list
 *      question:       The question you want Alexa to ask
 *      answers:        The list of available answers
 *      correct_answer: The correct answer to the question
 *
 * When adding or updating questions and answers, you must take the list of all values
 * in each of the 'answers' arrays for all questions and add them to a custom slot
 * in your skill called 'answers'.
 *
 * The 'answers' custom slot is be mapped to a couple of intents in the interaction model.
 * One intent, named 'AnswerOnlyIntent', contains only the slot, by itself, in order
 * to maximize the accuracy of the model.
 *
 * For example:
 *      AnswerOnlyIntent {answers}
 *
 * The other intent, 'AnswerQuestionIntent', provides more complex speech patterns
 * to match other utternaces users may include with their answers.
 *
 * For example:
 *      AnswerQuestionIntent is it {answers}
 *      AnswerQuestionIntent it is {answers}
 *      AnswerQuestionIntent the answer is {answers}
 *      AnswerQuestionIntent I think the answer is {answers}
 *
 * See model file at models/en-US.json for a complete example.
 */
module.exports = Object.freeze({
    questions_en_US: [
        {
            index: 1,
            question: 'Who is Luke Skywalker’s dad?',
            answers: ['anakin', 'darth maul', 'count dookoo', 'jar jar binks'],
            correct_answer: 'anakin'
        },
        {
          index: 2,
          question: 'Which is the only film of the original six in which desert planet Tatooine doesn’t appear?',
          answers: ['new hope', 'empire strikes back', 'last jedi', 'phantom menace'],
          correct_answer: 'empire strikes back'
        },
        {
            index: 3,
            question: 'What’s the name of the green-skinned bounty hunter Han Solo kills in Mos Eisley’s cantina?',
            answers: ['jar jar binks', 'boba fett', 'jabba the hut', 'greedo'],
            correct_answer: 'greedo'
        },
        {
            index: 4,
            question: 'Who kills Jabba The Hutt?',
            answers: ['princess leia', 'han solo', 'darth maul', 'jar jar binks'],
            correct_answer: 'princess leia'
        },
        {
            index: 5,
            question: 'What was Luke Skywalker’s original surname?',
            answers: ['jar jar binks', 'maul', 'starkiller', 'spaceman'],
            correct_answer: 'starkiller'
        },
        {
            index: 6,
            question: 'What planet do Wookiees come from?',
            answers: ['kashyyk', 'endor', 'jakku', 'tattoine'],
            correct_answer: 'kashyyk'
        },
        {
            index: 7,
            question: 'What does Luke’s uncle Owen do as a job?',
            answers: ['jar jar binks', 'moisture farmer', 'bounty hunter', 'jedi'],
            correct_answer: 'moisture farmer'
        },
        {
            index: 8,
            question: 'Which of these last names does Leia NOT have a family connection to?',
            answers: ['maul', 'solo', 'amidala', 'organa'],
            correct_answer: 'maul'
        },
        {
            index: 9,
            question: 'Obi-Wan learned to become one with the force from who?',
            answers: ['han solo', 'maul', 'yoda', 'qui got jinn'],
            correct_answer: 'qui gon jinn'
        },
        {
            index: 10,
            question: 'What color lasers do Tie Fighters shoot?',
            answers: ['green', 'purple', 'blue', 'yellow'],
            correct_answer: 'green'
        },
	{
            index: 11,
            question: 'What type of gun does han solo have?',
            answers: ['laser shooter', 'cross bow', 'shot gun', 'DL-44'],
            correct_answer: 'DL-44'
        },
	{
            index: 12,
            question: 'What rank does han solo obtain during the galactic civil war?',
            answers: ['admiral', 'commander', 'general', 'yellow'],
            correct_answer: 'general'
        },
	{
            index: 13,
            question: 'How old was pad may when she became queen?',
            answers: ['15', '14', '13', '12'],
            correct_answer: '14'
        },
	{
            index: 14,
            question: 'How old was yoda when he died?',
            answers: ['867', '900', '2000', '10'],
            correct_answer: '900'
        },
	{
            index: 15,
            question: 'What is the species of the workers on cloud city who helped freeze han solo in carbonite?',
            answers: ['ugnaughts', 'jar jar binks', 'yogis', 'wookies'],
            correct_answer: 'ugnaughts'
        },
	{
            index: 16,
            question: 'Where does yoda live?',
            answers: ['endor', 'kashyyk', 'dagobah', 'jakku'],
            correct_answer: 'dagobah'
        },
	{
            index: 17,
            question: 'What color is mace windus light saber?',
            answers: ['green', 'purple', 'blue', 'yellow'],
            correct_answer: 'purple'
        },
	{
            index: 18,
            question: 'Where is rey from?',
            answers: ['endor', 'kashyyk', 'dagobah', 'jakku'],
            correct_answer: 'jakku'
        },
	{
            index: 19,
            question: 'Who is the leader of the first order?',
            answers: ['general grievous', 'general snoke', 'darth vader', 'darth maul'],
            correct_answer: 'general snoke'
        },
	{
            index: 20,
            question: 'Which planet does maz kanata live?',
            answers: ['endor', 'dagobah', 'jakku', 'takodana'],
            correct_answer: 'takodana'
        }

    ],
    questions_en_GB: [
      {
            index: 1,
            question: 'Who is Luke Skywalker’s dad?',
            answers: ['anakin', 'darth maul', 'count dookoo', 'jar jar binks'],
            correct_answer: 'anakin'
        },
        {
          index: 2,
          question: 'Which is the only film of the original six in which desert planet Tatooine doesn’t appear?',
          answers: ['new hope', 'empire strikes back', 'last jedi', 'phantom menace'],
          correct_answer: 'empire strikes back'
        },
        {
            index: 3,
            question: 'What’s the name of the green-skinned bounty hunter Han Solo kills in Mos Eisley’s cantina?',
            answers: ['jar jar binks', 'boba fett', 'jabba the hut', 'greedo'],
            correct_answer: 'greedo'
        },
        {
            index: 4,
            question: 'Who kills Jabba The Hutt?',
            answers: ['princess leia', 'han solo', 'darth maul', 'jar jar binks'],
            correct_answer: 'princess leia'
        },
        {
            index: 5,
            question: 'What was Luke Skywalker’s original surname?',
            answers: ['jar jar binks', 'maul', 'starkiller', 'spaceman'],
            correct_answer: 'starkiller'
        },
        {
            index: 6,
            question: 'What planet do Wookiees come from?',
            answers: ['kashyyk', 'endor', 'jakku', 'tattoine'],
            correct_answer: 'kashyyk'
        },
        {
            index: 7,
            question: 'What does Luke’s uncle Owen do as a job?',
            answers: ['jar jar binks', 'moisture farmer', 'bounty hunter', 'jedi'],
            correct_answer: 'moisture farmer'
        },
        {
            index: 8,
            question: 'Which of these last names does Leia NOT have a family connection to?',
            answers: ['maul', 'solo', 'amidala', 'organa'],
            correct_answer: 'maul'
        },
        {
            index: 9,
            question: 'Obi-Wan learned to become one with the force from who?',
            answers: ['han solo', 'darth maul', 'yoda', 'qui got jinn'],
            correct_answer: 'qui gon jinn'
        },
        {
            index: 10,
            question: 'What color lasers do Tie Fighters shoot?',
            answers: ['green', 'purple', 'blue', 'yellow'],
            correct_answer: 'green'
        },
	{
            index: 11,
            question: 'What type of gun does han solo have?',
            answers: ['laser shooter', 'cross bow', 'shot gun', 'DL-44'],
            correct_answer: 'DL-44'
        },
	{
            index: 12,
            question: 'What rank does han solo obtain during the galactic civil war?',
            answers: ['admiral', 'commander', 'general', 'yellow'],
            correct_answer: 'general'
        },
	{
            index: 13,
            question: 'How old was pad may when she became queen?',
            answers: ['15', '14', '13', '12'],
            correct_answer: '14'
        },
	{
            index: 14,
            question: 'How old was yoda when he died?',
            answers: ['867', '900', '2000', '10'],
            correct_answer: '900'
        },
	{
            index: 15,
            question: 'What is the species of the workers on cloud city who helped freeze han solo in carbonite?',
            answers: ['ugnaughts', 'jar jar binks', 'yogis', 'wookies'],
            correct_answer: 'ugnaughts'
        },
	{
            index: 16,
            question: 'Where does yoda live?',
            answers: ['endor', 'kashyyk', 'dagobah', 'jakku'],
            correct_answer: 'dagobah'
        },
	{
            index: 17,
            question: 'What color is mace windus light saber?',
            answers: ['green', 'purple', 'blue', 'yellow'],
            correct_answer: 'purple'
        },
	{
            index: 18,
            question: 'Where is rey from?',
            answers: ['endor', 'kashyyk', 'dagobah', 'jakku'],
            correct_answer: 'jakku'
        },
	{
            index: 19,
            question: 'Who is the leader of the first order?',
            answers: ['general grievous', 'general snoke', 'darth vader', 'darth maul'],
            correct_answer: 'general snoke'
        },
	{
            index: 20,
            question: 'Which planet does maz kanata live?',
            answers: ['endor', 'dagobah', 'jakku', 'takodana'],
            correct_answer: 'takodana'
        }

  ]
});

