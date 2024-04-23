function TagSkill({ tagLabel, tagBgColor }) {
  return (
    <div className="mb-4 inline-block">
      <span
        className={`${tagBgColor} inline-block rounded-full px-2 py-0.5 text-xs font-medium uppercase dark:text-[#112240]`}
      >
        {tagLabel}
      </span>
    </div>
  );
}

export default TagSkill;
