import Form from "next/form";
import { createPost } from "@/actions/post";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldLabel } from '@/components/ui/field';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Toaster } from "react-hot-toast";

const CreateBlogForm = () => {
    return (
        <>
            <Toaster />
            <Form action={createPost} className="flex flex-col gap-4 w-full max-w-4xl mx-auto mb-6 p-4 text-lg border rounded-md shadow-md">
                <Field className="flex flex-col gap-2">
                    <FieldLabel htmlFor="input-field-username">Title</FieldLabel>
                    <Input
                        type="text"
                        name="title"
                        id="input-field-username"
                        placeholder="Enter blog title"
                    />
                </Field>
                <Field className="flex flex-col gap-2">
                    <FieldLabel htmlFor="input-field-thumbnail">Thumbnail</FieldLabel>
                    <Input
                        type="text"
                        name="thumbnail"
                        id="input-field-thumbnail"
                        placeholder="Enter blog thumbnail URL"
                    />
                </Field>
                <Field className="flex flex-col gap-2">
                    <FieldLabel htmlFor="input-field-content">Content</FieldLabel>
                    <Textarea
                        name="content"
                        id="input-field-content"
                        placeholder="Type your blog content here."
                        className="text-xl"
                    />
                </Field>
                <Field className="flex flex-col gap-2">
                    <FieldLabel htmlFor="input-field-tags">Tags (Comma separated [,])</FieldLabel>
                    <Input
                        type="text"
                        name="tags"
                        id="input-field-tags"
                        placeholder="Enter blog tags (comma separated)"
                    />
                </Field>
                <Field className="flex gap-2">
                    <FieldLabel htmlFor="input-field-content">Featured</FieldLabel>
                    <RadioGroup defaultValue="false" className="w-fit" name="isFeatured">
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
                <Button type="submit" variant="outline" size="lg" className="text-lg cursor-pointer">Create Blog</Button>
            </Form>
        </>
    )
}

export default CreateBlogForm;