import Form from "next/form";
import { createPost } from "@/actions/post";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from '@/components/ui/field';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const CreateBlogForm = () => {
    return (
        <Form action={createPost} className="flex flex-col gap-6 w-full max-w-6xl mx-auto p-4 text-lg border rounded-md shadow-md">
            <Field>
                <FieldLabel htmlFor="input-field-username">Title</FieldLabel>
                <Input
                    id="input-field-username"
                    type="text"
                    placeholder="Enter blog title"
                />
            </Field>
            <Field>
                <FieldLabel htmlFor="input-field-thumbnail">Thumbnail</FieldLabel>
                <Input
                    id="input-field-thumbnail"
                    type="text"
                    placeholder="Enter blog thumbnail URL"
                />
            </Field>
            <Field>
                <FieldLabel htmlFor="input-field-content">Content</FieldLabel>
                <Input
                    id="input-field-content"
                    type="text"
                    placeholder="Enter blog content"
                />
            </Field>
            <Field>
                <FieldLabel htmlFor="input-field-tags">Tags (Comma separated [,])</FieldLabel>
                <Input
                    id="input-field-tags"
                    type="text"
                    placeholder="Enter blog tags (comma separated)"
                />
            </Field>
            <Field className="w-full max-w-xs flex gap-5 items-center">
                <FieldLabel htmlFor="input-field-content">Featured</FieldLabel>
                <RadioGroup defaultValue="comfortable" className="w-fit">
                    <div className="flex gap-3">
                        <div className="flex items-center gap-2">
                            <RadioGroupItem value={"true"} id="r1" />
                            <Label htmlFor="r1" className="text-md font-light">Yes</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <RadioGroupItem value={"false"} id="r2" className="text-xl" />
                            <Label htmlFor="r2" className="text-md font-light">No</Label>
                        </div>
                    </div>
                </RadioGroup>
            </Field>
            <Button type="submit" variant="outline" size="lg" className="text-xl">Create Blog</Button>
        </Form>
    )
}

export default CreateBlogForm;